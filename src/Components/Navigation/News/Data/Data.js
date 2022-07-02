import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Data.css';

const baseURL = "https://api.coingecko.com/api/v3/coins";

export default function Data() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}`;
    if (!post) return ''

    return (
        <div className="tab" >
            <table>
                <thead>
                    <tr>
                        <th>Monnaie</th>
                        <th>Dernier Changement</th>
                        <th>Prix</th>
                        <th>Représentation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map(e =>
                            <tr key={uuidv4()}>
                                <td key={uuidv4()}>{e.name}</td>
                                <td className={(e.market_data.price_change_24h > 0) ? 'more' : 'less'} key={uuidv4()}>
                                    {
                                        (e.market_data.price_change_24h > 0) ? '+' + e.market_data.price_change_24h : e.market_data.price_change_24h
                                    }
                                </td>
                                <td className="prix" key={uuidv4()}>{e.market_data.current_price.eur}€</td>
                                <td key={uuidv4()}>{<img className="imgRot" src={e.image.small} alt={e.id} />}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
}