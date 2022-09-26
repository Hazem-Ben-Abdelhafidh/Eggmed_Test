import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const uri = "http://localhost:5000/graphql"
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      < Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>

    </ApolloProvider>
  </React.StrictMode>
)
