'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function InviteContent() {
  const searchParams = useSearchParams();
  const inviterId = searchParams.get('inviterId');

  useEffect(() => {
    if (inviterId) {
      window.location.href = `oathos://invite?inviterId=${inviterId}`;
    }
  }, [inviterId]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Opening OathOS...</h1>
      <p>If nothing happens, please make sure the app is installed.</p>
    </div>
  );
}
