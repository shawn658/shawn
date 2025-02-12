import { useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default function Home() {
    const [cart, setCart] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
            <h1 className="text-3xl font-bold mb-6">美白牙膏独立站</h1>
            <img src="/toothpaste.jpg" alt="美白牙膏" className="w-60 mb-4 rounded-lg shadow-lg" />
            <p className="text-lg text-gray-700 mb-4">专业美白牙膏，温和清洁，保护牙齿健康！</p>

            <div className="flex items-center space-x-4">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                    onClick={() => setCart(cart + 1)}>
                    添加到购物车 ({cart})
                </button>
                <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                    onClick={() => setCart(cart > 0 ? cart - 1 : 0)}>
                    移除
                </button>
            </div>

            {cart > 0 && (
                <div className="mt-6 w-full max-w-xs">
                    <h2 className="text-xl font-bold mb-2">结账</h2>
                    <PayPalButton
                        amount="19.99"
                        onSuccess={(details, data) => alert(`付款成功! 感谢 ${details.payer.name.given_name}`)}
                        options={{ clientId: "YOUR_PAYPAL_CLIENT_ID" }}
                    />
                </div>
            )}
        </div>
    );
}
