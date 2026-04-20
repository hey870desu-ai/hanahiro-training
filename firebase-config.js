// Firebase SDK (CDN v10) + はなひろラーニング用 Firestore ヘルパー
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, setDoc, getDocs, collection,
  serverTimestamp, collectionGroup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRla-iZ2IMo7yS4TsUf9deA49fc0igtgk",
  authDomain: "hanahiro-training.firebaseapp.com",
  projectId: "hanahiro-training",
  storageBucket: "hanahiro-training.firebasestorage.app",
  messagingSenderId: "804848273664",
  appId: "1:804848273664:web:8c2757d7eb0b2e89c94be5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const authReady = signInAnonymously(auth).catch(err => {
  console.warn('[Firebase] 匿名認証失敗:', err.message);
});

function sanitizeDocId(s) {
  return String(s).replace(/[\/\\\s]/g, '_').slice(0, 100);
}

window.firestore = {
  ready: authReady,

  async saveUser(name) {
    await authReady;
    const id = sanitizeDocId(name);
    await setDoc(doc(db, 'users', id), {
      name,
      lastLoginAt: serverTimestamp()
    }, { merge: true });
  },

  async saveProgress(name, moduleId, data) {
    await authReady;
    const id = sanitizeDocId(name);
    await setDoc(doc(db, 'users', id, 'progress', moduleId), {
      ...data,
      userName: name,
      moduleId,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  async getAllProgress() {
    await authReady;
    const snap = await getDocs(collectionGroup(db, 'progress'));
    return snap.docs.map(d => d.data());
  },

  async getAllUsers() {
    await authReady;
    const snap = await getDocs(collection(db, 'users'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
};

console.log('[Firebase] 初期化完了: hanahiro-training');
