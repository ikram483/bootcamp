def star_wars_quiz():
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]

    correct = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            correct += 1
        else:
            wrong_answers.append((item["question"], user_answer, item["answer"]))

    print(f"\nYou got {correct}/{len(data)} correct!")

    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for question, user_ans, correct_ans in wrong_answers:
            print(f" {question}\n   Your answer: {user_ans}\n   Correct answer: {correct_ans}")

star_wars_quiz()
