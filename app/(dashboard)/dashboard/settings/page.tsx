"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from "@/components/language-context"
import { Moon, Sun } from "lucide-react"

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate saving settings
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("settings")}</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("generalSettings")}</CardTitle>
          <CardDescription>{t("manageYourAccountSettings")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>{t("language")}</Label>
            <RadioGroup
              defaultValue={language}
              onValueChange={(value) => setLanguage(value as "en" | "es")}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="en" />
                <Label htmlFor="en">English</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="es" id="es" />
                <Label htmlFor="es">Español</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>{t("theme")}</Label>
            <RadioGroup
              defaultValue={theme}
              onValueChange={(value) => setTheme(value)}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="flex items-center">
                  <Sun className="mr-2 h-4 w-4" />
                  {t("light")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="flex items-center">
                  <Moon className="mr-2 h-4 w-4" />
                  {t("dark")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system">{t("system")}</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? t("saving") : t("saveChanges")}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

