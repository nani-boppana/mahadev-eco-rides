
import { useEffect } from 'react';

const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Set security-related meta tags
    const setSecurityHeaders = () => {
      // Content Security Policy
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self'",
        "frame-ancestors 'none'"
      ].join('; ');
      
      // Check if CSP meta tag already exists
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!existingCSP) {
        document.head.appendChild(cspMeta);
      }

      // X-Content-Type-Options
      const xContentType = document.createElement('meta');
      xContentType.httpEquiv = 'X-Content-Type-Options';
      xContentType.content = 'nosniff';
      
      const existingXContentType = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
      if (!existingXContentType) {
        document.head.appendChild(xContentType);
      }

      // Referrer Policy
      const referrerPolicy = document.createElement('meta');
      referrerPolicy.name = 'referrer';
      referrerPolicy.content = 'strict-origin-when-cross-origin';
      
      const existingReferrer = document.querySelector('meta[name="referrer"]');
      if (!existingReferrer) {
        document.head.appendChild(referrerPolicy);
      }
    };

    setSecurityHeaders();
  }, []);

  return <>{children}</>;
};

export default SecurityProvider;
