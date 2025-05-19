import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Pozivnica = () => {
    const [ime, setIme] = useState('');
    const [gosti, setGosti] = useState('');
    const [dolazak, setDolazak] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log({ ime, dolazak, gosti }); // Ovo ćeš zamijeniti sa slanjem podataka na server ili email
    };

    if (submitted) {
        return (
            <Card className="max-w-lg mx-auto my-10 p-6 text-center">
                <CardContent>
                    <h2 className="text-2xl font-bold mb-4">Hvala na odgovoru!</h2>
                    <p>Veselim se druženju!</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="max-w-lg mx-auto my-10 p-6">
            <CardContent>
                <h1 className="text-3xl font-bold mb-6 text-center">Pozivnica za Rođendan</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Tvoje ime" 
                        value={ime} 
                        onChange={(e) => setIme(e.target.value)} 
                        className="mb-4"
                        required
                    />
                    <div className="flex justify-center gap-4 mb-4">
                        <Button variant="primary" onClick={() => setDolazak('Da')} type="button">
                            Dolazim
                        </Button>
                        <Button variant="secondary" onClick={() => setDolazak('Ne')} type="button">
                            Ne dolazim
                        </Button>
                    </div>
                    {dolazak === 'Da' && (
                        <Textarea 
                            placeholder="Imena dodatnih gostiju" 
                            value={gosti} 
                            onChange={(e) => setGosti(e.target.value)} 
                            className="mb-4"
                        />
                    )}
                    <Button type="submit" variant="success" className="w-full">Pošalji</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Pozivnica;
