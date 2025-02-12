// import  { useState, useEffect } from "react";
// import moment from "moment";

// const TimeConverter = () => {
//   const [inputTime, setInputTime] = useState("");
//   const [convertedTime, setConvertedTime] = useState(null);
//   const [error, setError] = useState("");
//   const [currentTime, setCurrentTime] = useState(moment());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(moment());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const convertTo24HourFormat = (time) => {
//     const parsedTime = moment(time, ["hA", "hhA"], true);
//     return parsedTime.isValid() ? parsedTime.format("HH:mm:ss") : null;
//   };

//   const handleConvert = () => {
//     const converted = convertTo24HourFormat(inputTime);
//     if (converted) {
//       setConvertedTime(converted);
//       setError("");
//     } else {
//       setError("Invalid time format. Please enter a valid time like 4pm or 10am.");
//       setConvertedTime(null);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
//       <input
//         type="time"
//         value={inputTime}
//         onChange={(e) => setInputTime(e.target.value)}
//         placeholder="Enter time (e.g., 4pm)"
//         className="border p-2 rounded w-full"
//       />
//       <button
//         onClick={handleConvert}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Convert
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//       {convertedTime && <p className="text-green-500">Converted Time: {convertedTime}</p>}
//       <div className="mt-4 text-lg font-semibold">
//         Current Time: {currentTime.format("HH:mm:ss")}
//       </div>
//     </div>
//   );
// };

// export default TimeConverter;
// import { useState, useEffect } from "react";
// import moment from "moment";
// import {  TextField } from "@mui/material";

// const TimeConverter = () => {
//   const [inputTime, setInputTime] = useState("");
//   const [convertedTime, setConvertedTime] = useState(null);
//   const [error, setError] = useState("");
//   const [currentTime, setCurrentTime] = useState(moment());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(moment());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const convertTo24HourFormat = (time) => {
//     const parsedTime = moment(time, "HH:mm", true);
//     return parsedTime.isValid() ? parsedTime.format("HH:mm:ss") : null;
//   };

//   const handleConvert = () => {
//     const converted = convertTo24HourFormat(inputTime);
//     if (converted) {
//       setConvertedTime(converted);
//       setError("");
//     } else {
//       setError("تنسيق الوقت غير صالح. يرجى إدخال وقت بصيغة صحيحة مثل 16:30 أو 08:45.");
//       setConvertedTime(null);
//     }
//   };

//   return (
//     <div className="container">
//       <input
//         type="time"
//         value={inputTime}
//         onChange={(e) => setInputTime(e.target.value)}
//         className="border p-2 rounded w-full"
//       />
//        <TextField
//                        name="end_time"
//                         variant="outlined"
//                         required
//                         value={inputTime}

//                         onChange={(e) => setInputTime(e.target.value)}
//                         type="time"
//                         className="m-2"     
//                       />
//       <button 
//         onClick={handleConvert}
//         className="menu-title"
        
//       >
//         تحويل
//       </button>
//       {error && <p className="p-2">{error}</p>}
//       {convertedTime && <p className="p-2">الوقت المحول: {convertedTime}</p>}
//       <div className="p-2">
//         الوقت الحالي: {currentTime.format("HH:mm:ss")}
//       </div>
//     </div>
//   );
// };

// export default TimeConverter;
import { useState, useEffect } from "react";
import moment from "moment";
import { TextField } from "@mui/material";

const TimeConverter = () => {
  const [inputTime, setInputTime] = useState("");
  const [convertedTime, setConvertedTime] = useState(null);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(moment());
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const convertTo24HourFormat = (time) => {
    const parsedTime = moment(time, "HH:mm", true);
    return parsedTime.isValid() ? parsedTime.format("HH:mm:ss") : null;
  };

  const startCountdown = (time) => {
    let duration = moment.duration(time.asMilliseconds());

    const interval = setInterval(() => {
      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setCountdown("00:00:00");
        return;
      }
      duration = moment.duration(duration.asMilliseconds() - 1000);
      setCountdown(moment.utc(duration.asMilliseconds()).format("HH:mm:ss"));
    }, 1000);

    return interval;
  };

  const handleConvert = () => {
    const converted = convertTo24HourFormat(inputTime);
    if (converted) {
      setConvertedTime(converted);
      setError("");
      
      // بدء العد التنازلي
      const now = moment();
      const targetTime = moment(inputTime, "HH:mm");
      let duration = moment.duration(targetTime.diff(now));

      if (duration.asMilliseconds() > 0) {
        setCountdown(moment.utc(duration.asMilliseconds()).format("HH:mm:ss"));
        startCountdown(duration);
      } else {
        setCountdown("00:00:00");
      }

    } else {
      setError("تنسيق الوقت غير صالح. يرجى إدخال وقت بصيغة صحيحة مثل 16:30 أو 08:45.");
      setConvertedTime(null);
    }
  };

  return (
    <div className="container p-4">
      <input
        type="time"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <TextField
        name="end_time"
        variant="outlined"
        required
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        type="time"
        className="m-2"
      />
      <button 
        onClick={handleConvert}
        className="menu-title"
      >
        تحويل وبدء العد التنازلي
      </button>

      {error && <p className="p-2 text-red-500">{error}</p>}
      {convertedTime && <p className="p-2">الوقت المحول: {convertedTime}</p>}
      <div className="p-2">
        الوقت الحالي: {currentTime.format("HH:mm:ss")}
      </div>

      {countdown && (
        <div className="p-2 text-xl font-bold">
          العد التنازلي: {countdown}
        </div>
      )}
    </div>
  );
};

export default TimeConverter;
