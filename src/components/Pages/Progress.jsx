// import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
const Progress = () => {
    return (
        <div className="mt-4 mb-6">
            <h2 className="text-3xl text-center font-bold">Educational Progress System</h2>
            <div className="mt-4">
                <ProgressBar completed={60} className="py-4" customLabel="Educational Toys" />
                <ProgressBar className="py-4" customLabel="Math learning Toys" completed={180} maxCompleted={200} />
                <ProgressBar className="py-4" customLabel="Enginnering Toys" completed={170} maxCompleted={200} />
                <ProgressBar className="py-4" customLabel="Enginnering Tools" completed='190' maxCompleted={200} />

            </div>
        </div>
    );
};

export default Progress;