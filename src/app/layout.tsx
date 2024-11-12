"use client"
import React from 'react';
import { Provider } from 'react-redux';
import './globals.css';
import store from './store/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
