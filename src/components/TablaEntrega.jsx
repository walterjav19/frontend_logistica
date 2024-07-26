function TablaEntrega() {
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
    
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            L702640332
                        </th>
                        <td className="px-6 py-4 text-green-500">
                            FR
                        </td>
                        <td className="px-6 py-4 text-red-500">
                            2024-07-04
                        </td>
                        <td className="px-6 py-4 text-yellow-500">
                            4804867647529664090
                        </td>
                        <td className="px-6 py-4">
                            LOR
                        </td>
                        <td className="px-6 py-4 text-purple-500">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TablaEntrega;