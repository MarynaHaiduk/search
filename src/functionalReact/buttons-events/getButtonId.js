function GetButtonId() {

    const getId = (id) => {
        console.log(id);
    };

    return (
        <div>
            <button type="button" id={1}
                    onClick={(e) => getId(e.target.id)}>Try It
            </button>
            <button type="button" id={2}
                    onClick={(e) => getId(e.target.id)}>Try It
            </button>
        </div>
    )
}

export default GetButtonId;
