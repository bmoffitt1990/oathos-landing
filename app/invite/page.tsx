// app/invite/page.tsx
import { Suspense } from 'react';
import InviteContent from './InviteContent';

export const metadata = {
    title: 'Join me on OathOS',
    robots: 'noindex, nofollow',
};

export default function InvitePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <InviteContent />
    </Suspense>
  );
}
