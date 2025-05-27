import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

    const handleSignIn = (e: React.FormEvent) => {
      e.preventDefault();

      axios.post('http://localhost:3000/sign-in', { email, password })
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 backdrop-opacity-10 ">
      <div className="w-full max-w-md space-y-8">
        <Card className="border-green-600 border-1 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">Enter your details below to sign in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleSignIn}>
                Sign In
              </Button>
            </form>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <a href="#" className="font-medium text-primary hover:underline">
                Sign Up
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
