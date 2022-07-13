import React from 'react';
import ExchangeContainer from '../components/pages/ExchangeContainer';
import MonedaCompra from '../components/pages/MonedaCompraPage';
import VisualizarCompra from '../components/pages/VisualizarCompra';
import ProtectedRoute from './ProtectedRoute';
import { sessionStateSelector } from '../redux/login/selectors';
import { useSelector } from 'react-redux';



const TransaccionRoute = (props) => {
  const sessionState = useSelector(sessionStateSelector);

        return (
          <>
            <ProtectedRoute path='/App/Transaccion/Exchange/Home' component={ExchangeContainer} isAuth={sessionState}/>
            <ProtectedRoute path='/App/Transaccion/Moneda/Compra' component={MonedaCompra} isAuth={sessionState}/>  
            <ProtectedRoute path='/App/Transaccion/Moneda/VisualizarCompra' component={VisualizarCompra} isAuth={sessionState}/>        
          </>
        )
      }

export default TransaccionRoute;
