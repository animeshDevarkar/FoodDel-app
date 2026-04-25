import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import { assets } from '../../assets/assets'


const Orders = ({url}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url+'/api/order/list')
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data)
    }
    else{
      alert('Error fetching orders')
    }
  }

  const statusHandler = async(event,orderId) => {
    const response = await axios.post(url+'/api/order/status',{
      orderId,
      status: event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])


  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index === order.items.length-1){
                    return item.name + ' x ' + item.quantity
                  }
                  else{
                    return item.name + ' x ' + item.quantity + ', '
                  }
                })}
              </p>
              <p className='order-item-name'>
                 {order.address.firstName+' '+order.address.lastName}
              </p>
              <p className='order-item-address'>
                {order.address.street}, {order.address.city}, {order.address.state} {order.address.zip}
              </p>
              <p className='order-item-phone'>
                {order.address.phone}
              </p>
              <p className='order-item-items'>Items : {order.items.length}</p>
              <p className='order-item-total'>Total : {order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='order-item-status' name="status" id="status">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Food Delivered">Food Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
