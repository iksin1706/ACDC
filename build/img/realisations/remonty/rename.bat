@echo off
setlocal enabledelayedexpansion
set "count=1"
for %%F in (*.jpg) do (
    ren "%%F" "!count!.jpg"
    set /a "count+=1"
)
