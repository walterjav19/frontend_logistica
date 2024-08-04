import React, { useState, useEffect } from 'react';
import ModalEdit from './ModalEdit';
import {FetchAllOrders} from '../consume';
import axios from 'axios';

function TablaOrdenes({ onEntregarOrden }) {
    const [ordenes, setOrdenes] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    //setOrdenes(data);


    const fetchOrdenes2 =  () => {
        //console.log('axios');
        const url = '/orders';
        const username = 'DummyUser@blueorangeintegrationtech-AD9F0T.WSHFWA';
        const password = 'efb29cfc-64e3-43cd-b550-4ad68de166f0';

        const auth = {
        username: username,
        password: password
        };

        axios.get(url, { auth: auth })
        .then(response => {
            setOrdenes(response.data);
            //console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        
   
    };

  



    const EntregarOrden = (index) => {
        // Borrar la orden entregada y agregarla a la tabla de entregas
        onEntregarOrden(ordenes[index]);
        setOrdenes(ordenes.filter((_, i) => i !== index));

        const body={
            id: "AJ769",
        }
        console.log(body);
    };

    const handleEditClick = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

        // Usar useEffect para cargar datos al montar el componente y cada 30 segundos
        useEffect(() => {
            fetchOrdenes2(); // Cargar datos inicialmente

            const intervalId = setInterval(() => {
                fetchOrdenes2(); // Actualizar datos cada 30 segundos
            }, 10000); // 10 segundos

            return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
        }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

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
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Ammount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Recibido
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Entregado
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
                                {orden.id}
                            </th>
                            <td className="px-6 py-4 text-green-500">
                                {orden.description}
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                {orden.totalAmount}
                            </td>
                            <td className="px-6 py-4 text-yellow-500">
                                {orden.status}
                            </td>
                            <td className="px-6 py-4">
                                {orden.receivedByWarehouseAt}
                            </td>
                            <td className="px-6 py-4 text-purple-500">
                                {orden.deliveredByLogisticsAt}
                            </td>
                            <td>
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => EntregarOrden(index)}>Entregar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalEdit isOpen={isModalOpen} onClose={handleCloseModal} order={selectedOrder} />
        </div>
    );
}

export default TablaOrdenes;
