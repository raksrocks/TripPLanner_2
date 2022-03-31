import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { AttractionList } from "./attraction/AttractionList";
import { AttractionCreate } from "./attraction/AttractionCreate";
import { AttractionEdit } from "./attraction/AttractionEdit";
import { AttractionShow } from "./attraction/AttractionShow";
import { StartStopPlaceList } from "./startStopPlace/StartStopPlaceList";
import { StartStopPlaceCreate } from "./startStopPlace/StartStopPlaceCreate";
import { StartStopPlaceEdit } from "./startStopPlace/StartStopPlaceEdit";
import { StartStopPlaceShow } from "./startStopPlace/StartStopPlaceShow";
import { FoodPlaceList } from "./foodPlace/FoodPlaceList";
import { FoodPlaceCreate } from "./foodPlace/FoodPlaceCreate";
import { FoodPlaceEdit } from "./foodPlace/FoodPlaceEdit";
import { FoodPlaceShow } from "./foodPlace/FoodPlaceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Trip Planner"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="Attraction"
          list={AttractionList}
          edit={AttractionEdit}
          create={AttractionCreate}
          show={AttractionShow}
        />
        <Resource
          name="StartStopPlace"
          list={StartStopPlaceList}
          edit={StartStopPlaceEdit}
          create={StartStopPlaceCreate}
          show={StartStopPlaceShow}
        />
        <Resource
          name="FoodPlace"
          list={FoodPlaceList}
          edit={FoodPlaceEdit}
          create={FoodPlaceCreate}
          show={FoodPlaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
