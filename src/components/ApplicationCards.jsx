import React from 'react';

const ApplicationCards = () => {
    const applications = [
        {
            icon: 'agriculture',
            title: 'Agricultura',
            description: 'Fertilizantes ricos en nitrógeno (46% N), esenciales para el crecimiento vegetal.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP4zFISFHLJoXPO3sNN9tqjnv1fbefRjqHLZk2KmQekZGjeg4tbA7ENvwqhSIJ4TeBBLoDmZyMeFpUllAJqwHqQGbloFpWEjlLQJ0Yw7_5CuBOFZoIf9yBG3HbG2TJH1S6lb2kwsurhWWZ3BlMLbIAvMPEZJQHA1sPEeLq2RLM7Z_yj-mlrmQmCG9LX4PfkKEerdp4hv801DRJ2ZB4EReucFYYlOk7X9ot-sSKoLREP80bevwJo2Ok7m3C-GBCgY-sdMn0rChZb2yy',
            alt: 'Fields of green crops representing agriculture usage'
        },
        {
            icon: 'spa',
            title: 'Cosmética',
            description: 'Agente humectante y queratolítico en cremas, lociones y tratamientos dermatológicos.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0d3jEDSU1uSnjmfHsihs5nVaUxA1g3e1joJrSb6KB97AnOeeYc_3fU8xbLiBPTe6gCSEotInbwCQnj1laQKMrinO3qzEn8QsglwuSgykQCNAMsnDNSdmirxjEHQby78QFBGYs0QAUrBpAy4c5gplbKPSxHBChSrHlwxQv_wDQ7o3jrJ6xRcKwz259h-BSEGpT0rHvBTFhSEE06HsJd1J5iEA9B8sc6lp1GnrHz0T44cz78Ee9Bnoah_p7g1UlWEEKLnFKkHPWHFBw',
            alt: 'Cosmetic cream texture close up'
        },
        {
            icon: 'medical_services',
            title: 'Industria Médica',
            description: 'Uso en diuréticos, pruebas de función renal y tratamientos dermatológicos avanzados.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGy7KVBL9vo0IUXrqHp6quF1w6EGY1_niuoikJyoPHAqOW6FPe2IUvBBxWpRNpgWLZdF45qKDTcUJ9EQL3QvIfBbvJ1DW0sbh5b2toS_bYIVXpGf_wE1Yu4wgm50zjbH-HmdW8YlyqBRAnA219Mq4rfqZcRo8IJ5GcXoByyXcV34c3-D-rzOfa3OqK-c3RE19C90ut4j--vDeokSPmlLwZr61HxQKWAyJZuYNOvXrfF8n0AVn178i9X4yXybTblGm0yNMJ-k3pn5xJ',
            alt: 'Medical laboratory equipment clean setting'
        },
        {
            icon: 'checkroom',
            title: 'Textil',
            description: 'Mejorador de solubilidad en baños de tinte y acabados para tejidos naturales.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMCvhxkkahF7blzcBB42bTMU11YLGUDzcebwcFbkZI0mBCZFdQFn_A1jZANpXr6DNcHKU__aST8JpgQkfObjriSA-r0FYxGK_ucY20ygeVJrX8SICUQBjvAVH96eJNR4vY7jyGey_lRgX8y9YAQR6Ff0n12KHkp4BYp-5lqBvTOW9HgU1TFadVxO2llfL-7tUNXadUudBrTE1LGuuO0JFZIFOR-mZXgvUGA3BTFA1wgdaCvyJCIBt_ozeQVnXHHxyl9E9d4I812rKw',
            alt: 'Textile fabrics with colorful patterns'
        },
        {
            icon: 'directions_car',
            title: 'Automotriz (SCR)',
            description: 'Solución de Urea (AdBlue) para reducción catalítica selectiva de emisiones NOx.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOqrDJWjrIZC0VIrX-PWJT4eIqXy2m6BT_-jMr0l7RcJITu_Y_iboW_ICP5gJEK4JI0OBRlm2fsk5srb0STxI5khAN4ykvyb7d2DnraCXHxMbMaU8Y7xvpL6YzikSk3sJzgd5zUyvYM7tdTRz4qNCr5AF6w6U6lKaXuqnCLFMP3pAuID1YFP8JzCASOxNU6mcuaggsgcQINM_vzCpDFReruwL2ldruDHy4L8WFU5x0vYtkYjidvgdYBE-akS9VdZ8jwGysfVq5sYLP',
            alt: 'Modern car exhaust system schematic'
        },
        {
            icon: 'science',
            title: 'Industria Química',
            description: 'Materia prima para la síntesis de plásticos, resinas (urea-formaldehído) y adhesivos.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq8CJhyLcvmKvsDAIZj-E7tHpwhW2PkXU_oG3viR4RC8bM6r2Vkh4EVpIk0PN9a-_Pretwt4xyq0qVz-J3dsXydzOa4Nm5rQowdbvKv1vWf3bXzL0q6lt2Tn5yEnhv34rRgJK-c8naega1uPuVGhgOelxF-rz3QeF1l9qcsZakYEWgsKsylBokGEyYmjsHvXGHfCmeQCADBW5cj0B5mtbcHyK2alAjhYGP7jyZSdTfi8L2qwq3HrWwqkORO7vhomVHHD3uWpFOKBF5',
            alt: 'Chemical plant pipes and structures'
        }
    ];

    return (
        <section id="applications" className="py-12 px-4 md:px-10 flex justify-center w-full">
            <div className="w-full max-w-6xl">
                <div className="mb-8">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Versatilidad Química</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Aplicaciones Industriales de la Urea</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl text-lg">
                        La urea (CO(NH₂)₂) es un compuesto fundamental en múltiples sectores, desde la agricultura masiva hasta la tecnología de reducción de emisiones.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                        >
                            <div
                                className="w-full h-48 bg-center bg-cover rounded-lg relative overflow-hidden group"
                                style={{ backgroundImage: `url("${app.image}")` }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-primary text-[20px]">{app.icon}</span>
                                    <h3 className="text-lg font-bold">{app.title}</h3>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{app.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApplicationCards;
