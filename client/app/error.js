'use client'; // Error components must be Client Components

function doSomething() {
    return (
        <div>
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="px-3 py-3 bg-red-500 rounded-lg">
                        <h1 className="font-mono font-bold text-5xl text-black">
                            We have encountered an error.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default doSomething;
