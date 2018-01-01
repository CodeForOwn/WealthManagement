#!/usr/bin/env python3

from PyQt5.QtWidgets import QLabel, QVBoxLayout, QWidget
from PyQt5.QtCore import Qt


class Example(QWidget):

    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setFixedSize(1000, 1000)
        self.setWindowTitle('Example')
        label = QLabel('Hello')
        layout = QVBoxLayout()
        layout.addWidget(label)
        layout.setAlignment(Qt.AlignLeft)
        self.setLayout(layout)


if __name__ == '__main__':

    import sys
    from PyQt5.QtWidgets import QApplication

    app = QApplication(sys.argv)
    ex = Example()
    ex.show()
    sys.exit(app.exec_())
