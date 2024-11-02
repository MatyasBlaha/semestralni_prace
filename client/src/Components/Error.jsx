export default function Error({ title, message, onConfirm }){

    return(
        <div className='p-8'>
            <h2>{title}</h2>
            <p>{message}</p>
            {onConfirm && (
                <div>
                    <button onClick={onConfirm} className='p-8 border-2'>
                        Okay
                    </button>
                </div>
            )}
        </div>
    )
}