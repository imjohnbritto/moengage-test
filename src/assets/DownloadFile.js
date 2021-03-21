import React from 'react';
import './DownloadFile.scss';


const DownloadFile = () => {
    return (
        <div className="DownloadFile-wrapper btn">
            <a href="../../api/assignment.json" download="assignment.postman_collection.json">
              <span>Download Postman Collection</span>
</a>

        </div>
    );
}

export default DownloadFile;