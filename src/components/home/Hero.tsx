import React from 'react';
const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-24 lg:py-28">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
            </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
