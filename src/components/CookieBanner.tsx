import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'doc-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const choose = (v: 'accepted' | 'rejected') => {
    localStorage.setItem(STORAGE_KEY, v)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="rounded-2xl bg-ink text-bg shadow-2xl p-5">
            <p className="text-sm leading-relaxed">
              We use cookies to improve your experience and analyze traffic. By using this site, you agree to our use of cookies as described in our{' '}
              <Link to="/privacy-policy" className="underline underline-offset-2 text-gold">Privacy Policy</Link>.
            </p>
            <div className="mt-4 flex gap-2 justify-end">
              <button
                onClick={() => choose('rejected')}
                className="px-4 py-2 text-sm rounded-full border border-bg/30 hover:bg-bg/10 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => choose('accepted')}
                className="px-4 py-2 text-sm rounded-full bg-gold text-ink font-semibold hover:brightness-95 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
