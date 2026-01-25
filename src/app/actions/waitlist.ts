'use server';

import { supabase } from '@/lib/supabase';

export async function joinWaitlist(formData: any) {
    const { error } = await supabase
        .from('waitlist')
        .insert([
            {
                first_name: formData.firstName,
                last_name: formData.lastName,
                age: parseInt(formData.age),
                gender: formData.gender,
                phone: formData.phone,
                email: formData.email,
                country: formData.country,
                city: formData.city,
            },
        ]);

    if (error) {
        console.error('Error joining waitlist:', error);
        return { success: false, error: error.message };
    }

    return { success: true };
}
