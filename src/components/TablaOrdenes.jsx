import React, { useState,useEffect} from 'react';





function TablaOrdenes({onEntregarOrden}) {


    const [ordenes, setOrdenes] = useState([]);


    // Función para obtener las órdenes del servidor
    const fetchOrdenes = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/orders');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrdenes(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    
    
    


    const GeneraOrden=()=>{
        // Aquí puedes generar una nueva orden. Este es un ejemplo estático.
        const nuevaOrden = {
            id: `L${Math.floor(Math.random() * 1000000000)}`,
            country: 'ES',
            timestamp: new Date().toISOString().split('T')[0],
            transaction: `${Math.floor(Math.random() * 10000000)}`,
            partner: 'ABC',
        };
        setOrdenes([...ordenes, nuevaOrden]);
    };

    const EntregarOrden=(index)=>{
        //borrar la orden entregada y agregarla a la tabla de entregas
        onEntregarOrden(ordenes[index]);
        setOrdenes(ordenes.filter((_, i) => i !== index));
    };


    // Usar useEffect para cargar datos al montar el componente y cada 30 segundos
    useEffect(() => {
        fetchOrdenes(); // Cargar datos inicialmente

        const intervalId = setInterval(() => {
            fetchOrdenes(); // Actualizar datos cada 30 segundos
        }, 5000); // 30 segundos

        return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={GeneraOrden}>Genera Orden</button>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8">
                <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-blue-700 dark:text-gray-400">
                    <tr>
                        <th colSpan="7" className="px-7 py-3 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Ordenes Recibidas
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id Orden
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TimeStamp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No. Transaction
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Partner
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Entrega
                        </th>
                    </tr>
                </thead>
                <tbody>
                {ordenes.map((orden, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {orden.entityId}
                            </th>
                            <td className="px-6 py-4 text-green-500">
                                {orden.country}
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                {orden.timestamp}
                            </td>
                            <td className="px-6 py-4 text-yellow-500">
                                {orden.transaction}
                            </td>
                            <td className="px-6 py-4">
                                {orden.partner}
                            </td>
                            <td className="px-6 py-4 text-purple-500">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td>
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => EntregarOrden(index)}>Entregar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaOrdenes;
