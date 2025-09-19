'use client'

import { useEffect } from 'react';
import { useThemeStore } from '@/Store/themeStore';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { isDark } = useThemeStore();

    useEffect(() => {
        const root = document.documentElement;
        if(isDark) {
            root.classList.add('dark');
        }else {
            root.classList.remove('dark');
        }
    }, [isDark]);
    return <>{children}</>
}