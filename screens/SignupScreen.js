import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import SignupImage from "../assets/images/signup.png";
import GoogleIcon from "../assets/icons/google.png";
import FacebookIcon from "../assets/icons/facebook.png";
import AppleIcon from "../assets/icons/apple.png";
import { useNavigation } from "@react-navigation/native";
export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView>
        <View className="flex-row justify-start pt-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            className="bg-yellow-400 p-2 ml-4 rounded-tr-2xl rounded-bl-2xl"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={SignupImage}
            className="w-[150] h-[150]"
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tl-[50px] rounded-tr-[50px]">
        <View className="space-y-4">
          <Text className="text-gray-700 ml-2">Full Name</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-4 rounded-xl"
            placeholder="Enter your fullname"
          />
          <Text className="text-gray-700 ml-2">Email Address</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-4 rounded-xl"
            placeholder="Enter email"
          />
          <Text className="text-gray-700 ml-2">Password</Text>
          <TextInput
            className="bg-gray-100 text-gray-700 p-4 rounded-xl"
            placeholder="Enter password"
            secureTextEntry
          />
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => {}}
          >
            <Text className="text-center text-gray-700 font-bold text-xl">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity>
            <Image source={GoogleIcon} className="w-12 h-12" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={AppleIcon} className="w-12 h-12" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={FacebookIcon} className="w-12 h-12" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="font-semibold text-yellow-500"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
