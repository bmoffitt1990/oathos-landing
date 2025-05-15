// app/invite/page.tsx
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// app/invite/page.tsx
export const metadata = {
    title: 'Join me on OathOS',
    robots: 'noindex, nofollow',
  };  

export default function InvitePage() {
  const searchParams = useSearchParams();
  const inviterId = searchParams.get('inviterId');

  useEffect(() => {
    if (inviterId) {
      // Deep link to the native app
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
