import { notification } from "antd";
export const api = {
  login: async (data: { email: string; password: string }) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      notification.error({
        message: "Login Gagal",
        duration: 2,
      });
      throw new Error("Login failed");
    }

    const result = await response.json();
    localStorage.setItem("token",result.token)
    notification.success({
      message: "Login Sukses",
      duration: 2,
    });
    
    return result;
  },
  listUser: async ({ page }: { page: number }) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      notification.error({
        message: "Fetch Gagal",
        duration: 2,
      });
      throw new Error("Login failed");
    }

    const result = await response.json();
    localStorage.setItem("token",result.token)
    notification.success({
      message: "Sukses Mendapatkan Data",
      duration: 2,
    });
    
    return result;
  },
};
