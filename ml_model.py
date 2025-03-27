import sys

def process_audio(audio_data):
    # Simulating ML processing
    if "scream" in audio_data.lower():
        return "High Threat"
    elif "help" in audio_data.lower():
        return "Medium Threat"
    else:
        return "Low Threat"

if __name__ == "__main__":
    audio_data = sys.argv[1]
    print(process_audio(audio_data))
