'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchNickname = async () => {
      if (!user) return;
      const userRef = doc(db, 'users', user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        setNickname(data.nickname || '');
      }
    };

    fetchNickname();
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/signup');
  };

  return (
    <>
      {/* 第1ヘッダー */}
      <header className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <img
              src="/img/logo-dark.png"
              alt="SABACAN"
              width={140}
              height={60}
              className="h-8 w-auto object-contain cursor-pointer dark:block hidden"
              loading="eager"
            />
            <img
              src="/img/logo-light.png"
              alt="SABACAN"
              width={140}
              height={60}
              className="h-8 w-auto object-contain cursor-pointer dark:hidden block"
              loading="eager"
            />
          </Link>
          <Link href="/how-to-use" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500">
            How to Use
          </Link>
        </div>

        {!loading && (
          <div className="flex gap-4 items-center text-sm">
            {user ? (
              <Link href="/account">Account</Link>
            ) : (
              <>
                <Link href="/login">Log in</Link>
                <Link href="/signup">Sign up</Link>
              </>
            )}
          </div>
        )}
      </header>

      {/* ✅ 第2ヘッダー（案内バー） */}
      <div className="bg-blue-50 dark:bg-blue-900 text-sm py-2 border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-center gap-6 text-blue-700 dark:text-blue-200">
          <Link href="/top" className="hover:underline">
            📰 Top
          </Link>
          <Link href="/word-review" className="hover:underline">
            🧠 Word Review Mode
          </Link>
        </div>
      </div>
    </>
  );
}
