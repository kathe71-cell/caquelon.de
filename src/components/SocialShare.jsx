import React from 'react';
import { Share2, Facebook, Twitter, MessageCircle, Mail, Link } from 'lucide-react';

export default function SocialShare({ 
  url = typeof window !== 'undefined' ? window.location.href : '', 
  title = 'Schau dir dieses tolle Fondue-Rezept an!',
  description = 'Entdeckt auf Caquelon.de - dem besten Fondue-Guide'
}) {
  const [showShareMenu, setShowShareMenu] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Clipboard not available');
    }
  };

  const handleShare = (platform) => {
    if (platform === 'copy') {
      copyToClipboard();
      return;
    }
    
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const handleKeyDown = (event, platform) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleShare(platform);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        onKeyDown={(e) => e.key === 'Enter' && setShowShareMenu(!showShareMenu)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        aria-label="Seite teilen"
        aria-expanded={showShareMenu}
        aria-haspopup="true"
      >
        <Share2 className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm font-medium">Teilen</span>
      </button>

      {showShareMenu && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 z-[60] min-w-48 max-w-xs"
             role="menu"
             aria-orientation="vertical"
             aria-labelledby="share-menu">
          <div className="space-y-1">
            <button
              onClick={() => handleShare('facebook')}
              onKeyDown={(e) => handleKeyDown(e, 'facebook')}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-blue-50 rounded-md transition-colors focus:outline-none focus:bg-blue-50"
              role="menuitem"
              tabIndex="0"
              aria-label="Auf Facebook teilen"
            >
              <Facebook className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span className="text-sm">Facebook</span>
            </button>
            
            <button
              onClick={() => handleShare('twitter')}
              onKeyDown={(e) => handleKeyDown(e, 'twitter')}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-blue-50 rounded-md transition-colors focus:outline-none focus:bg-blue-50"
              role="menuitem"
              tabIndex="0"
              aria-label="Auf Twitter teilen"
            >
              <Twitter className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span className="text-sm">Twitter</span>
            </button>
            
            <button
              onClick={() => handleShare('whatsapp')}
              onKeyDown={(e) => handleKeyDown(e, 'whatsapp')}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-green-50 rounded-md transition-colors focus:outline-none focus:bg-green-50"
              role="menuitem"
              tabIndex="0"
              aria-label="Über WhatsApp teilen"
            >
              <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span className="text-sm">WhatsApp</span>
            </button>
            
            <button
              onClick={() => handleShare('email')}
              onKeyDown={(e) => handleKeyDown(e, 'email')}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:bg-gray-50"
              role="menuitem"
              tabIndex="0"
              aria-label="Per E-Mail teilen"
            >
              <Mail className="w-4 h-4 text-gray-600" aria-hidden="true" />
              <span className="text-sm">E-Mail</span>
            </button>
            
            <hr className="my-1 border-gray-200" role="separator" />
            
            <button
              onClick={() => handleShare('copy')}
              onKeyDown={(e) => handleKeyDown(e, 'copy')}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:bg-gray-50"
              role="menuitem"
              tabIndex="0"
              aria-label="Link kopieren"
            >
              <Link className="w-4 h-4 text-gray-600" aria-hidden="true" />
              <span className="text-sm">{copied ? 'Kopiert!' : 'Link kopieren'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Overlay to close menu */}
      {showShareMenu && (
        <div 
          className="fixed inset-0 z-[55]" 
          onClick={() => setShowShareMenu(false)}
          onKeyDown={(e) => e.key === 'Escape' && setShowShareMenu(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}