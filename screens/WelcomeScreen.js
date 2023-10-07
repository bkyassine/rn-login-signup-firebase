import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import WelcomeImage from "../assets/images/welcome.png";
import { useNavigation } from "@react-navigation/native";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center capitalize">
          Let's get started!
        </Text>
        <View className="items-center">
          <Image className="w-[350] h-[350]" source={WelcomeImage} />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            className="bg-yellow-400 mx-7 text-center py-3 rounded-xl"
            onPress={() => navigation.navigate("Signup")}
          >
            <Text className="text-center font-bold text-xl text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-yellow-400">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
