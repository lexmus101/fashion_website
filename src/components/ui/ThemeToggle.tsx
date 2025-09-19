import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react'
import { useThemeStore } from '@/Store/themeStore';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useThemeStore();

    return(
        <motion.button
        onClick={toggleTheme}
        className='relative p-2 rounded-full bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95}}
        >
            <motion.div
            initial={false}
            animate={{
                rotate:isDark ? 180 : 0,
            }}
            transition={{
                type:"spring",
                stiffness: 200,
                damping: 10,
            }}
            >
                {isDark ? (
                    <Moon size={20} className='text-gray-700 dark:text-gray-300' />
                ) : (
                    <Sun size={20} className='text-gray-700 dark:text-gray-300' />
                )}
            </motion.div>
        </motion.button>
    )
}