import { useSelector } from 'react-redux'

function Checkout() {

    const orderReducer = useSelector(store => store.orderReducer);
    const lineItemReducer = useSelector(store => store.lineItemReducer);

    // axios.post

    return (
        <>
            <h3>Step 3: Checkout</h3>

            <ul>
                <li>{orderReducer.name}</li>
                <li>{orderReducer.address}</li>
                <li>{orderReducer.city}, {orderReducer.zip}</li>
            </ul>

            <div>For {orderReducer.type}</div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItemReducer.map((order, i) => {
                        <tr key={i}>
                            {/* NOT RIGHT */}
                            <td>lineItemReducer.name</td> 
                            <td>lineItemReducer.cost</td> 
                            {/* --------- */}
                        </tr>
                        // <ProductListItem key={i} product={product} />;
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Checkout;