'use client';

import { useState } from 'react';
import CameraCapture from '@/components/CameraCapture';
import NFCReader from '@/components/NFCReader';

export default function MasukPage() {
    const [paymentMethod, setPaymentMethod] = useState<'nfc' | 'ticket'>('nfc');

    const handleNFCReade = async (cardData: {uid: string}) => {
        
    }
}