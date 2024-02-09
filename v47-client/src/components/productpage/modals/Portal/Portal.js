import React from 'react';
import ReactDOM from "react-dom";

// credit to https://javascript.plainenglish.io/creating-modals-with-react-portal-40829c33a626

export default function Portal({children}) {
    return ReactDOM.createPortal(
        <div>
            {children}
        </div>,
        document.getElementById('portal')
      )
}