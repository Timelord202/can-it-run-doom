'use server';
import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation'

export default async function insertDevice(formData: FormData) {
    // TODO: Add validation with Zod
    const device = {
        storage: formData.get('storage'),
        ram: formData.get('ram'),
        clockspeed: formData.get('clockspeed'),
        name: formData.get('name'),
    };

    const { error } = await supabase.from('devices').insert(device);

    if (error) {
        throw new Error("Failed to insert device!");
    }

    redirect('/devices');
}