import { useState, useEffect } from "react"

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
      console.log("Online ...")
    }
    function handleOffline() {
      setIsOnline(false)
      console.log("Offline ...")
    }
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])
  return isOnline
}
