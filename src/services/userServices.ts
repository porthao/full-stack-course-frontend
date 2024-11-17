interface LoginResponse {
  token: string;
  refreshToken: string;
}

class UserServices {
  login = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<LoginResponse> => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let loginResult: any = {};

    loginResult = fetch(
      "http://192.168.100.7:4000/api/v1/users/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

    return loginResult;
  };
}

export default UserServices;
