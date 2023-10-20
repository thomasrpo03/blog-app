import { useState, useEffect, useMemo } from "react";
import HeroImg from "../assets/herothomas.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { profileContent } from "../lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultValue = useMemo(
    () => profileContent[currentIndex].title,
    [currentIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profileContent.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Card className=" flex lg:h-[27rem] flex-col lg:flex-row justify-center items-center  rounded-2xl gap-10 lg:gap-0">
      <img
        src={HeroImg}
        alt="Profile Img"
        className="w-[27rem] md:mt-8 lg:mt-0 rounded-t-2xl md:rounded-b-2xl lg:rounded-r-none"
      />
      <div className="flex flex-col h-full lg:p-6 justify-start items-center gap-6 flex-1">
        <div className=" flex w-full lg:p-3 flex-col justify-start items-center gap-3">
          <Tabs
            defaultValue={defaultValue}
            className="flex flex-col w-full items-center"
          >
            <TabsList>
              {profileContent.map((item) => (
                <TabsTrigger key={item.title} value={item.title} className="">
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {profileContent.map((item) => (
              <TabsContent key={item.title} value={item.title}>
                <div className="pt-4">
                  <div>
                    <CardHeader>
                      <CardTitle className="text-4xl">{item.title}</CardTitle>
                      <Separator />
                    </CardHeader>
                    <CardContent>
                      <p>{item.content}</p>
                    </CardContent>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
