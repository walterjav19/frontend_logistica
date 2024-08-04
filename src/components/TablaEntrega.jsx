function TablaEntrega({entregas}) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-pink-300 dark:bg-blue-700 dark:text-gray-400">
                <tr>
                    <th colSpan="6" className="px-6 py-3 text-center text-lg font-semibold text-gray-900 dark:text-white">
                        Ordenes Entregadas
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
                    </tr>
                </thead>
                <tbody>
                    
                {entregas.map((entrega, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {entrega.id}
                            </th>
                            <td className="px-6 py-4 text-green-500">
                                {entrega.description}
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                {entrega.totalAmount}
                            </td>
                            <td className="px-6 py-4 text-yellow-500">
                                {entrega.status}
                            </td>
                            <td className="px-6 py-4">
                                {entrega.receivedByWarehouseAt}
                            </td>
                            <td className="px-6 py-4">
                                {entrega.deliveredByLogisticsAt}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaEntrega;
