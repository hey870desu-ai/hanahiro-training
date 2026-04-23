// Firebase SDK (CDN v10) + はなひろラーニング用 Firestore ヘルパー
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, limit,
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

window.firestore = {
  ready: authReady,

  // トークンからユーザーを検索（LINE公式アカウント経由の自動ログイン）
  async getUserByToken(token) {
    await authReady;
    const q = query(collection(db, 'users'), where('authToken', '==', token), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() };
  },

  // ユーザーIDで直接取得（localStorage再ログイン用）
  async getUserById(userId) {
    await authReady;
    const snap = await getDoc(doc(db, 'users', userId));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  },

  // 最終ログイン時刻を更新
  async touchUser(userId) {
    await authReady;
    await setDoc(doc(db, 'users', userId), {
      lastLoginAt: serverTimestamp()
    }, { merge: true });
  },

  async saveProgress(userId, moduleId, data) {
    await authReady;
    await setDoc(doc(db, 'users', userId, 'progress', moduleId), {
      ...data,
      moduleId,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  async getAllProgress() {
    await authReady;
    const snap = await getDocs(collectionGroup(db, 'progress'));
    return snap.docs.map(d => {
      const parentPath = d.ref.parent.parent;
      return { ...d.data(), _userId: parentPath ? parentPath.id : null };
    });
  },

  async getAllUsers() {
    await authReady;
    const snap = await getDocs(collection(db, 'users'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
};

console.log('[Firebase] 初期化完了: hanahiro-training');
