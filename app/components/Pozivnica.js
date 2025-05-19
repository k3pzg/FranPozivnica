import React, { useState } from 'react';

const Pozivnica = () => {
    const [ime, setIme] = useState('');
    const [gosti, setGosti] = useState('');
    const [dolazak, setDolazak] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log({ ime, dolazak, gosti }); // Ovde ćeš kasnije dodati slanje podataka na server
    };

    if (submitted) {
        return (
            <div className="max-w-lg mx-auto my-10 p-6 text-center bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Hvala na odgovoru!</h2>
                <p>Veselim se druženju!</p>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Pozivnica za Rođendan</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Tvoje ime"
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
                <div className="flex justify-center gap-4 mb-4">
                    <button
                        type="button"
                        onClick={() => setDolazak('Da')}
                        className={`p-2 rounded-lg ${dolazak === 'Da' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                    >
                        Dolazim
                    </button>
                    <button
                        type="button"
                        onClick={() => setDolazak('Ne')}
                        className={`p-2 rounded-lg ${dolazak === 'Ne' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
                    >
                        Ne dolazim
                    </button>
                </div>
                {dolazak === 'Da' && (
                    <textarea
                        placeholder="Imena dodatnih gostiju"
                        value={gosti}
                        onChange={(e) => setGosti(e.target.value)}
                        className="mb-4 w-full p-2 border border-gray-300 rounded-lg"
                    />
                )}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
                    Pošalji
                </button>
            </form>
        </div>
    );
};

export default Pozivnica;
