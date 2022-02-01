
export const getImageUrl = (filename: string) => {
    const SERVER_URL = process.env.REACT_APP_FILE_SERVER_UR;
    const token = process.env.REACT_APP_FILE_SERVER_TOKEN;

    return SERVER_URL + filename +  token;
}

//Finds the value of a given key in a given object
const findVal = (object, key) => {
    var value;
    Object.keys(object).some(function(k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            value = findVal(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

export const GenerateImageFromObject = (object) => {
    const redText = "fs-1 bg-light-danger text-danger";
    const blueText = "fs-1 text-xl bg-light-primary text-primary";
    const yellowText = "fs-1 bg-light-warning text-warning";
    const purpleText = "fs-1 bg-light-info text-info";
    const greenText = "fs-1 bg-light-success text-success";

    const colors = [redText, blueText, yellowText, purpleText, greenText]
    const setColor = (string) => colors[string?.charCodeAt(0)%colors.length];
    console.log(object);
    console.log(findVal(object,"lastName"));
    return (
            <div className='symbol symbol-circle symbol-70px overflow-hidden me-3'>
                <div 
                className={`symbol-label ${!object['profilePicture'] ? setColor(findVal(object,"lastName").toUpperCase()):''}`}>
                    { object['profilePicture'] &&
                        <img src={getImageUrl(findVal(object,"profilePicture")['filename'])}
                            alt="User" className="w-100"/>
                    }
                    { !object['profilePicture'] &&
                        <>{findVal(object,"lastName").toUpperCase()[0]}</>
                    }
                </div>
            </div>
            );
}