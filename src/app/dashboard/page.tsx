import Dashboard from '@/components/Dashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'لوحة التحكم | وقاية جين',
    description: 'متابعة مؤشراتك الحيوية اليومية بناءً على جيناتك.',
};

export default function DashboardPage() {
    return <Dashboard />;
}
