import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

/**
 * Official 100% DSGVO-compliant Vercel Web Analytics & Speed Insights for React.
 */
export default function VercelAnalytics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
