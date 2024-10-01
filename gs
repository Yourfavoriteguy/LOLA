--Move & Ultimate Names

-- Create a TextLabel in the ScreenGui
local screenGui = Instance.new("ScreenGui")
local textLabel = Instance.new("TextLabel")

-- Set up the properties of the TextLabel
textLabel.Parent = screenGui
textLabel.Text = "KJ FROM TEMU BUT BETTER"
textLabel.TextColor3 = Color3.new(1, 1, 1) -- White text
textLabel.BackgroundTransparency = 1 -- No background
textLabel.Size = UDim2.new(1, 0, 1, 0) -- Full screen size
textLabel.Position = UDim2.new(0.5, 0, 0.5, 0) -- Centered
textLabel.AnchorPoint = Vector2.new(0.5, 0.5) -- Center the anchor point
textLabel.Font = Enum.Font.SourceSans -- Choose a font
textLabel.TextScaled = true -- Auto scale the text size

-- Set the GUI to the player's screen
screenGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")

-- Wait for 1 second
wait(1)

-- Fade out the text over time
local fadeTime = 1 -- The duration of the fade-out in seconds
local fadeOut = 0 -- Initial fade amount

while fadeOut < fadeTime do
    wait(0.1) -- Update every 0.1 second
    fadeOut = fadeOut + 0.1
    textLabel.TextTransparency = fadeOut / fadeTime -- Increase transparency over time
end

-- Fully hide the text when fade-out is complete
textLabel:Destroy()


local player = game.Players.LocalPlayer

local playerGui = player.PlayerGui

local hotbar = playerGui:FindFirstChild("Hotbar")

local backpack = hotbar:FindFirstChild("Backpack")

local hotbarFrame = backpack:FindFirstChild("Hotbar")

local baseButton = hotbarFrame:FindFirstChild("1").Base

local ToolName = baseButton.ToolName


ToolName.Text = "Signature Kick"


local player = game.Players.LocalPlayer

local playerGui = player.PlayerGui

local hotbar = playerGui:FindFirstChild("Hotbar")

local backpack = hotbar:FindFirstChild("Backpack")

local hotbarFrame = backpack:FindFirstChild("Hotbar")

local baseButton = hotbarFrame:FindFirstChild("2").Base

local ToolName = baseButton.ToolName


ToolName.Text = "Ravage"


local player = game.Players.LocalPlayer

local playerGui = player.PlayerGui

local hotbar = playerGui:FindFirstChild("Hotbar")

local backpack = hotbar:FindFirstChild("Backpack")

local hotbarFrame = backpack:FindFirstChild("Hotbar")

local baseButton = hotbarFrame:FindFirstChild("3").Base

local ToolName = baseButton.ToolName


ToolName.Text = "Swift sweep"


local player = game.Players.LocalPlayer

local playerGui = player.PlayerGui

local hotbar = playerGui:FindFirstChild("Hotbar")

local backpack = hotbar:FindFirstChild("Backpack")

local hotbarFrame = backpack:FindFirstChild("Hotbar")

local baseButton = hotbarFrame:FindFirstChild("4").Base

local ToolName = baseButton.ToolName


ToolName.Text = "Collateral Ruin"


local Players = game:GetService("Players")

local player = Players.LocalPlayer

local playerGui = player:WaitForChild("PlayerGui")


local function findGuiAndSetText()

    local screenGui = playerGui:FindFirstChild("ScreenGui")

    if screenGui then

        local magicHealthFrame = screenGui:FindFirstChild("MagicHealth")

        if magicHealthFrame then

            local textLabel = magicHealthFrame:FindFirstChild("TextLabel")

            if textLabel then

                textLabel.Text = "20 TEMU SERIES"

            end

        end

    end

end


playerGui.DescendantAdded:Connect(findGuiAndSetText)

findGuiAndSetText()

--[[Animations]]

--[[Move 1]]

local animationId = 10468665991


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then


local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://17838619895"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


Anim:Play()

Anim:AdjustSpeed(0.1)

Anim.TimePosition = startTime

Anim:AdjustSpeed(1.5)

local sound = Instance.new("Sound")
sound.SoundId = "rbxassetid://78267113234809" -- ur sound id
sound.Volume = 5
sound.Parent = workspace
sound:Play()


local vfx = game.ReplicatedStorage.Resources.KJEffects["RUNAROUNDWIND"].RUNAROUNDWIND:Clone()
vfx.Parent = game.Players.LocalPlayer.Character["HumanoidRootPart"]
    for _, child in ipairs(vfx:GetChildren()) do
        if child:IsA("ParticleEmitter") then
child:Emit(3)
        end
    end


    end

end

--[[END OF MOVE 1 ANIM]]

--[[Move 2]]


humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 10466974800


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then


local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://14046756619"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


Anim:Play()

Anim:AdjustSpeed(1)

Anim.TimePosition = startTime

Anim:AdjustSpeed(2)

local sound = Instance.new("Sound")
sound.SoundId = "rbxassetid://18427761019" -- ur sound id
sound.Volume = 5
sound.Parent = workspace
sound:Play()

local vfx = game.ReplicatedStorage.Resources.KJEffects["launchup"].launchything:Clone()
vfx.Parent = game.Players.LocalPlayer.Character["HumanoidRootPart"]
    for _, child in ipairs(vfx:GetChildren()) do
        if child:IsA("ParticleEmitter") then
child:Emit(3)
        end
    end

    end

end

--[[END OF MOVE 2 ANIM]]

--[[Move 3]]


humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 10471336737


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then


local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://13556985475"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0.3


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(0.8)

local sound = Instance.new("Sound")
sound.SoundId = "rbxassetid://92905430475237" -- ur sound id
sound.Volume = 5
sound.Parent = workspace
sound:Play()



local vfx = game.ReplicatedStorage.Resources.SunsetEffects["On"].Blast:Clone()
vfx.Parent = game.Players.LocalPlayer.Character["HumanoidRootPart"]
    for _, child in ipairs(vfx:GetChildren()) do
        if child:IsA("ParticleEmitter") then
child:Emit(3)
        end
    end
wait(0.4)

vfx:destroy()


delay(1.8, function()

    Anim:Stop()

end)


    end

end

--[[END OF MOVE 3 ANIM]]

--[[Move 4]]


humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 12510170988


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://13501296372"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(0.8)

local sound = Instance.new("Sound")
sound.SoundId = "rbxassetid://18691618631" -- ur sound id
sound.Volume = 5
sound.Parent = workspace
sound:Play()

wait(0.5)

local sound = Instance.new("Sound")
sound.SoundId = "rbxassetid://18505840350" -- ur sound id
sound.Volume = 5
sound.Parent = workspace
sound:Play()

local vfx = game.ReplicatedStorage.Resources.KJEffects["ColateralImapctTest"].HitTwo:Clone()
vfx.Parent = game.Players.LocalPlayer.Character["HumanoidRootPart"]
    for _, child in ipairs(vfx:GetChildren()) do
        if child:IsA("ParticleEmitter") then
child:Emit(3)
        end
    end


    end

end

--[[END OF MOVE 4 ANIM]]

--[[Wall combo]]

humanoid.AnimationPlayed:Connect(onAnimationPlayed)

local animationId = 15955393872


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://15310973900"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0.05


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(2.8)


    end

end

--[[END OF WALL COMBO ANIM]]

--[[Ult Activation]]

humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 12447707844


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")
wait(0.1)

AnimAnim.AnimationId = "rbxassetid://12772543293"


local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(1)



    end

end
--[[END OF ULT ACTIVATION ANIM]]

--[[Dash]]

humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 10479335397


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://13639700348"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(1.6)


delay(1.8, function()

    Anim:Stop()

end)


    end

end

--[[END OF DASH ANIM]]

--[[Uppercut]]
humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 10503381238


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://14900168720"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 1.3


Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(1.7)


    end

end

--[[END OF UPPERCUT ANIM]]

--[[Downslam]]

humanoid.AnimationPlayed:Connect(onAnimationPlayed)


local animationId = 10470104242


local player = game.Players.LocalPlayer

local character = player.Character or player.CharacterAdded:Wait()

local humanoid = character:WaitForChild("Humanoid")


local function onAnimationPlayed(animationTrack)

    if animationTrack.Animation.AnimationId == "rbxassetid://" .. animationId then

local p = game.Players.LocalPlayer

local Humanoid = p.Character:WaitForChild("Humanoid")


for _, animTrack in pairs(Humanoid:GetPlayingAnimationTracks()) do

    animTrack:Stop()

end


local AnimAnim = Instance.new("Animation")

AnimAnim.AnimationId = "rbxassetid://13876406148"

local Anim = Humanoid:LoadAnimation(AnimAnim)


local startTime = 0


wait(0.2)

Anim:Play()

Anim:AdjustSpeed(0)

Anim.TimePosition = startTime

Anim:AdjustSpeed(3)


    end

end

--[[END OF DOWNSLAM ANIM]]

--[[Punch anims]]

--punch vfx enabler/disabler
local M1SwingVFX = true
local HeavyPunch = false
local BlackFlash = true
local GreenSlash = false
local ImpactActivated = false

--m1 animation editor
local Punch1 = "13491635433"
local Punch2 = "15259161390"
local Punch3 = "14001963401"
local Punch4 = "13296577783"

--sound enable/disable sound
local ImpactSound = true
local SwingSound = true

--choose the sound ids/change them idfk
local animationSounds = {
    M1 = {
        Swing = "8595974357",
        Impact = "8595980577"
    },
    M2 = {
        Swing = "8595984380",
        Impact = "8595983255"
    },
    M3 = {
        Swing = "8595983255",
        Impact = "8595984380"
    },
    M4 = {
        Swing = "8595977193",
        Impact = "8595974357"
    }
}















--dont edit this shit unless you know what tf you doing

local animationIDs = {
    10469493270, 
    10469630950, 
    10469639222, 
    10469643643  
}

local function playSound(soundId, parent)
    local sound = Instance.new("Sound")
    sound.SoundId = soundId
    sound.Parent = parent
    sound:Play()
    game:GetService("Debris"):AddItem(sound, sound.TimeLength)
end

local function isHumanoidNearby(character)
    local humanoidRootPart = character:FindFirstChild("HumanoidRootPart")
    if not humanoidRootPart then return false end

    local minDistance = 4.28
    local regionSize = minDistance * 2
    local region = Region3.new(
        humanoidRootPart.Position - Vector3.new(regionSize, regionSize, regionSize),
        humanoidRootPart.Position + Vector3.new(regionSize, regionSize, regionSize)
    )

    local parts = workspace:FindPartsInRegion3(region, nil, math.huge)
    for _, part in ipairs(parts) do
        if part:IsA("BasePart") and part.Name == "HumanoidRootPart" and part.Parent:FindFirstChildOfClass("Humanoid") then
            if part.Parent == character then
                continue
            end

            local distance = (humanoidRootPart.Position - part.Position).magnitude
            if distance <= minDistance then
                return true
            end
        end
    end
    return false
end

local function activateVFX()
    local vfx
    if HeavyPunch then
        vfx = game.ReplicatedStorage.Resources.KJEffects["1and2"]["1and2"]:Clone()
    elseif BlackFlash then
        vfx = game.ReplicatedStorage.Resources.FiveSeasonsFX["CharFX"].ArmBurst:Clone()
    elseif GreenSlash then
        vfx = game.ReplicatedStorage.Resources.GreenLights["Final"].Part.Attachment:Clone()
    end

    if vfx then
        local playerCharacter = game.Players.LocalPlayer.Character
        vfx.Parent = playerCharacter:FindFirstChild("HumanoidRootPart")

        if ImpactActivated then
            if not isHumanoidNearby(playerCharacter) then
                return
            end
        end

        for _, child in ipairs(vfx:GetChildren()) do
            if child:IsA("ParticleEmitter") then
                child:Emit(20)
            end
        end
    end
end

local function onAnimationPlayed(animationTrack)
    local animationId = tonumber(animationTrack.Animation.AnimationId:match("%d+$"))
    local animationName = ""
    
    for i, id in ipairs(animationIDs) do
        if id == animationId then
            animationName = "M" .. i
            break
        end
    end
    
    if animationName ~= "" then
        if M1SwingVFX then
            activateVFX()
        end
        
        local soundData = animationSounds[animationName]
        if SwingSound and soundData and soundData.Swing then
            playSound(soundData.Swing, game.Players.LocalPlayer.Character:FindFirstChild("HumanoidRootPart"))
        end

        if ImpactActivated and soundData and soundData.Impact then
            if isHumanoidNearby(game.Players.LocalPlayer.Character) then
                playSound(soundData.Impact, game.Players.LocalPlayer.Character:FindFirstChild("HumanoidRootPart"))
            end
        end
    end
end

local player = game.Players.LocalPlayer
local character = player.Character
local humanoid = character and character:FindFirstChildOfClass("Humanoid")

if humanoid then
    humanoid.AnimationPlayed:Connect(onAnimationPlayed)
end








local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

local animationIds = {
    "10469493270"
}

local function stopAnimations()
    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
        if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
            track:Stop()
        end
    end
end

local function playNewAnimation1() --you can add code after the anim to make it so that it runs more than just a custom anim
    local animation = Instance.new("Animation")
    animation.AnimationId = "rbxassetid://" .. Punch1

    local animationTrack = humanoid:LoadAnimation(animation)
    animationTrack:Play()
    animationTrack:AdjustSpeed(1)
end

local function onAnimationTrackStarted(track)
    if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
        stopAnimations()
        playNewAnimation1()
    end
end

humanoid.AnimationPlayed:Connect(onAnimationTrackStarted)



local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

local animationIds = {
    "10469630950"
}

local function stopAnimations()
    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
        if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
            track:Stop()
        end
    end
end

local function playNewAnimation2() --you can add code after the anim to make it so that it runs more than just a custom anim
    local animation = Instance.new("Animation")
    animation.AnimationId = "rbxassetid://" .. Punch2

    local animationTrack = humanoid:LoadAnimation(animation)
    animationTrack:Play()
    animationTrack:AdjustSpeed(1)
end

local function onAnimationTrackStarted(track)
    if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
        stopAnimations()
        playNewAnimation2()
    end
end

humanoid.AnimationPlayed:Connect(onAnimationTrackStarted)




local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

local animationIds = {
    "10469639222"
}

local function stopAnimations()
    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
        if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
            track:Stop()
        end
    end
end

local function playNewAnimation3() --you can add code after the anim to make it so that it runs more than just a custom anim
    local animation = Instance.new("Animation")
    animation.AnimationId = "rbxassetid://" .. Punch3

    local animationTrack = humanoid:LoadAnimation(animation)
    animationTrack:Play()
    animationTrack:AdjustSpeed(1)
end

local function onAnimationTrackStarted(track)
    if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
        stopAnimations()
        playNewAnimation3()
    end
end

humanoid.AnimationPlayed:Connect(onAnimationTrackStarted)




local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")

local animationIds = {
    "10469643643"
}

local function stopAnimations()
    for _, track in ipairs(humanoid:GetPlayingAnimationTracks()) do
        if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
            track:Stop()
        end
    end
end

local function playNewAnimation4() --you can add code after the anim to make it so that it runs more than just a custom anim
    local animation = Instance.new("Animation")
    animation.AnimationId = "rbxassetid://" .. Punch4

    local animationTrack = humanoid:LoadAnimation(animation)
    animationTrack:Play()
    animationTrack:AdjustSpeed(1)
end

local function onAnimationTrackStarted(track)
    if table.find(animationIds, track.Animation.AnimationId:match("%d+$")) then
        stopAnimations()
        playNewAnimation4()
    end
end

humanoid.AnimationPlayed:Connect(onAnimationTrackStarted)
