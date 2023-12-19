import { useContext } from 'react'
import { StockContext } from '../contexts/StockContext'

export default function useStcok() {
    return useContext(StockContext)
}
